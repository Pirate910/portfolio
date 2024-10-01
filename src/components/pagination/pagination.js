const Pagination = ({totalPosts, postsPerPage, setCurrentPage}) => {

  let pages = []
  for(let i = 0 ; i < Math.ceil(totalPosts/postsPerPage); i++ ){
    pages.push(i);
  }


  return ( 
        <nav className='pagination__body'>
            <ul className='pagination__body--parent-el'>
              {pages.map( (page, index) => {
                  return <li onClick={ () => setCurrentPage(page)} className='pagination__body--child-el'><button key={index} className='pagination__body--nav-btn'>{(page + 1)}</button></li>
              })}
            </ul>
        </nav>
  );
}
 
export default Pagination;
