import React,{useState} from 'react'

const Sidebar=()=>{
  const [open,setOpen]=useState('open')  
  function closeSidebar(){
      setOpen("close")
  }
  return(
    <div className={open==='open'?'scrollbar open':'scrollbar'}>
       <img className="sidebar_close" src="docs/img/close.png" onClick={closeSidebar}/>
     </div> 
    
    )
}

export default Sidebar;