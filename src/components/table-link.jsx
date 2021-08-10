import React, { useEffect, useState, useMemo } from "react";
import LinkItem from "./link-item";
import Pagination from "../library/pagination.js";
import Modal from "./modal.jsx";
import { ToastContainer, toast, Slide} from 'react-toastify';

let PageSize = 5;

function LinkTable(props) {
  const [links, setLinks] = useState(JSON.parse(localStorage.getItem('linkList')) || []);
  const [order, setOrder] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deleteItemTemp, setDeleteItemTemp] = useState();
  const [index, setIndex] = useState();
  const [isDelete, setIsDelete] = useState(false);

  useEffect(() => {

  },
    [links, isDelete])

  const notify = () => {
    toast.success(deleteItemTemp.name + ' removed.', {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return links.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, links]);

  const sortByItems = (items, order) => {
    if (order === "most") {
      items.sort((a, b) => {
        if (a.vote < b.vote) { return 1; }
        else if (a.vote > b.vote) { return -1; }
        else if (a.vote === b.vote) {
          if (a.voteDate > b.voteDate) {
            return -1;
          } else if (a.voteDate < b.voteDate) {
            return 1;
          }
        }
      });
    } else {
      items.sort((a, b) => {
        if (a.vote < b.vote) { return -1; }
        else if (a.vote > b.vote) { return 1; }
        else if (a.vote === b.vote) {
          if (a.voteDate > b.voteDate) {
            return -1;
          } else if (a.voteDate < b.voteDate) {
            return 1;
          }
        }
      });
    }
    return items;
  }

  const sortByVote = (order) => {
    let items = sortByItems(links, order);
    setLinks([...items]);
    localStorage.setItem("linkList", JSON.stringify([...links]));
  }

  const openModal = (e, i) => {
    setIsModalOpen(true);
    setDeleteItemTemp(e);
    setIndex(i);
    setIsDelete(false);
  }

  const closeModal = () => {
    setIsModalOpen(false);
  }

  const deleteItem = (item) => {
    links.splice(index, 1)
    setLinks([...links])
    localStorage.setItem("linkList", JSON.stringify(links));
    setIsModalOpen(false);
    setIsDelete(true);
    notify();
  }

  return (
    <div className="h-screen flex justify-center	justify-items-center mt-5">
      <div className="w-80">
        <div className="add-link flex h-20 border  border-gray-600 bg-gray-200 items-center	rounded-lg" onClick={() => window.location.href = "/create-list"}>
          <div className="plus mx-1 border w-16 h-16 border-gray-600 bg-gray-200 items-center	rounded-lg">
            <p className=" flex justify-center items-center	w-16 h-16	">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </p>
          </div>
          <h1 className="link-title font-bold text-lg	">SUBMIT A LINK</h1>
        </div>
        <div className="h-1 bg-gray-200 mt-5  "></div>
        <div className="order-select-wrapper w-40 mt-5">
          <select name="order-select" className="vote bg-gray-200 rounded" onChange={(e) => sortByVote(e.target.value)} value={order}>
            <option>Order by</option>
            <option value="most">Most Voted (Z -{">"} A)</option>
            <option value="less">Less Voted (A -{">"} Z)</option>
          </select>
        </div>
        <div>
          {currentTableData && currentTableData.length > 0 ? (currentTableData.map((item, index) => {
            return (
              <ul>
                <li key={index}>
                  <LinkItem 
                    item={item}
                    setLinks={setLinks}
                    links={links}
                    sortByVote={sortByVote}
                    openModal={openModal}
                    index={index}
                    currentPage={currentPage}
                    order={order} />
                </li>
              </ul>
            )
          })) : []}

        </div>
        <div className="flex justify-center	">
          <Pagination
            className="pagination-bar"
            currentPage={currentPage}
            totalCount={links.length}
            pageSize={PageSize}
            onPageChange={page => setCurrentPage(page)}
          />
        </div>
      </div>
      <Modal
        width={377}
        height={222}
        noBackdrop={true}
        isOpen={isModalOpen}
        onClose={closeModal}
        deleteItemTemp={deleteItemTemp}
        deleteItem={deleteItem}
      >
      </Modal>
      <ToastContainer
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        transition={Slide}
      />
    </div>
  )
}

export default LinkTable;