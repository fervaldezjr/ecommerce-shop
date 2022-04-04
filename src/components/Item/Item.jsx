const Item = ({producto}) => {
    return (
      <div className="card" style={{width:'18rem'}}>
      <img src={producto.img} className="card-img-top" alt={producto.name}/>
      <div className="card-body">
          <p className="card-text">{producto.name}</p>
      </div>
  </div>
    )
  }
  
  export default Item