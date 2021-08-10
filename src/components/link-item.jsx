import React, { useEffect } from "react";

function LinkItem(props) {

  const { item } = props;
  useEffect(() => {
  },[item.vote])

  const upVote = (value) => {
    var link = props.links.find((link) => link.id === value.id);
    link.vote++;
    link.voteDate = Date.now();
    props.setLinks([...props.links]);
    props.sortByVote(props.order || 'most');
  }

  const downVote = (value) => {
    var link = props.links.find((link) => link.id === value.id);
    if (link.vote > 0) link.vote--;
    link.voteDate = Date.now();
    props.setLinks([...props.links]);
    props.sortByVote(props.order || 'most');
  }


  return (
    <div className=" mt-5">
      <div className="item-wrapper w-80 hover:bg-gray-200	rounded-lg mb-2 px-1 py-2 relative">
        <div className="delete-icon" onClick={(e) => props.openModal(item,props.index)}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 fill-current text-red-600" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
          </svg>
        </div>
        <div className="item-container flex">
          <div className="flex">
            <div className="vote-points border w-20 h-20 border-gray-600 bg-gray-200 items-center	rounded-lg	" >
              <div className="vote-number text-2xl text-center mb-2 font-bold">{item.vote}</div>
              <div className="points text-center font-medium	">POINTS</div>
            </div>
          </div>
          <div className="mx-2 flex flex-col justify-between">
            <div className="flex flex-col">
              <h1 className="link-name font-bold text-lg leading-none mb-1">{item.name}</h1>
              <a className="link-url text-gray-900 text-opacity-25 text-xs" href={item.url}>( {item.url} )</a>
            </div>
            <div className="vote-wrapper flex">
              <div className="up-vote flex items-center text-xs" onClick={() => upVote(item)}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7l4-4m0 0l4 4m-4-4v18" />
                </svg>
                Up
              </div>
              <div className="down-vote flex items-center text-xs" onClick={() => downVote(item)}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 17l-4 4m0 0l-4-4m4 4V3" />
                </svg>
                Down
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default LinkItem;