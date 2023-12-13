  import Table from '@mui/material/Table';
  import TableBody from '@mui/material/TableBody';
  import TableCell from '@mui/material/TableCell';
  import TableContainer from '@mui/material/TableContainer';
  import TableHead from '@mui/material/TableHead';
  import TableRow from '@mui/material/TableRow';
  import Paper from '@mui/material/Paper';
  import { Button, Container } from 'react-bootstrap';
  import { useEffect, useState } from 'react';
  import { Avatar, Input, Modal } from 'antd';
  import { SearchOutlined } from '@ant-design/icons';
  import "./TabelData.scss"

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }



  export default function TabelData() {
    const data = require('./UsersData.json')

    const [additem,setAdditem]= useState(false)
    const [editItem, setEditItem] = useState(false)
    const [editData,setEditdata] = useState()
    const [filterData,setFilterData] = useState(data)
    const[missing,setMissing]= useState(false)
    const [missdata,setMissdata] = useState()

  const addHandler=()=>{
    setAdditem(true)
  }
  const addItemCancel =()=>{
    setAdditem(false)
  }
  const editcancelHandler=()=>{
    setEditItem(false)
  }
  const editOkHandler =()=>{
    setEditItem(false)
  }
  const addItemOk =()=>{
    setAdditem(false)
  }

  const missNoHandler =(e)=>{
    const index = filterData.indexOf(missdata);
    handlePopup(e, index, 2);
    setMissing(false)
  }
  const missYesHandler = (e)=>{
    debugger
    const index = filterData.indexOf(missdata);
    handlePopup(e, index, 3);
    setMissing(false);

  }
   
  const handlePopup =(e, index, type) => {
    const mainData = filterData;
    console.log(e.target)
    if(type===1){
      if(mainData[index].status === 0 ){
        mainData[index].status = Number(type);
      }
      else{
        mainData[index].status = 0;
      }
      // mainData[index].status = Number(1);
    } else {
      mainData[index].status = Number(type); // 1- approve, 2 - missing, 3 - urgent, 0 - nill
    }

    setFilterData([...mainData])
  }
  const missingHandler=(e,index)=>{
    console.log(e,index)
    setMissing(true)
    setMissdata(filterData[index])
  }
  const editHandler=(e,index)=>{
    console.log(e,index)
    setEditItem(true)
    setEditdata(filterData[index])

  }
  const filterhandler = (event) => {
    const inputValue = event.target.value.toLowerCase(); // convert input to lowercase for case-insensitive comparison
  
    const filteredData = inputValue.length < 1
      ? data
      : data.filter((item) => {
          // Check if any property includes the input value
          return Object.values(item).some((value) =>
            value.toString().toLowerCase().includes(inputValue)
          );
        });
  
    setFilterData(filteredData);
  };  
  


    return (
    <Container className='pt-2 my-5 border rounded card-bac-color'>
      <div className='d-flex px-2 justify-content-between my-2'>
              <div className='rounded-pill search-field'>
              <Input placeholder="Serch Item"  className='rounded-pill'  onChange={filterhandler}    suffix={<SearchOutlined />} />
              </div>
              <div > 
              <button className='btn rounded-pill px-3 btn-border me-3'  onClick={addHandler} >Add Items</button>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-printer" viewBox="0 0 16 16">
                  <path d="M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"/>
                  <path d="M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1"/>
              </svg>
              </div>
          </div>
      <TableContainer className='px-3' >
        <Table   aria-label="simple table">
          <TableHead>
            <TableRow>
            <TableCell></TableCell>
              <TableCell className='font-weight-bold t-head'  align='center'>Product Name</TableCell>
              <TableCell className='font-weight-bold t-head'  align="center">Brand</TableCell>
              <TableCell className='font-weight-bold t-head'  align="center">Price</TableCell>
              <TableCell className='font-weight-bold t-head'  align="center">Quantity</TableCell>
              <TableCell className='font-weight-bold t-head'  align="center">Total</TableCell>
              <TableCell className='font-weight-bold t-head'  align="center">Status</TableCell>
              <TableCell className='font-weight-bold t-head'  align="center"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filterData.map((row,index) => (
              <TableRow
                key={index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                  <Avatar src={row.image_url} />
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.productName}
                </TableCell>
                <TableCell align="right">{row.brand}</TableCell>
                <TableCell align="right">{row.Price}</TableCell>
                <TableCell align="right">{row.Quantity}</TableCell>
                <TableCell align="right">{row.Quantity*row.Price}</TableCell>
                <TableCell align="right">
                  {row.status ===1 && <span className="badge bg-success rounded-pill p-2">Approved</span>}
                  {row.status ===2 && <span className="badge bg-warning rounded-pill p-2">Missing</span>}
                  {row.status ===3 && <span className="badge bg-danger rounded-pill p-2">Missing-Urgent</span>}
                </TableCell>
                <TableCell align="right">
                  <div className='d-flex actions'>
                    <div className='px-1'  onClick={(e)=>handlePopup(e,index, 1)}>
                        <svg xmlns="http://www.w3.org/2000/svg"  width="20" height="20" fill="currentColor" className={`mx-2 bi bi-check-lg ${row.status === 1 ? "text-success":""}`} viewBox="0 0 16 16">
                            <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022"/>
                        </svg>
                    </div>
                    <div className='px-1'  onClick={(e)=>missingHandler(e,index)}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className={`mx-2 bi bi-x ${row.status===2 ? "text-warning":""} ${row.status === 3? "text-danger":""}`} viewBox="0 0 16 16">
                              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                          </svg>
                    </div>
                    <div className='px-1' onClick={(e)=>editHandler(e,index)}>
                      Edit
                    </div>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Modal open={additem}  onCancel={addItemCancel} onOk={addItemOk}>
        Add Items
      </Modal>
      <Modal open={missing}  title="Missing Product" closable={false} footer={(_, { OkBtn, CancelBtn }) => (
            <div className="d-flex justify-content-between">
              <button className='btn rounded-pill px-3 py-1 btn-border me-2' onClick={() => setMissing(false)} ><p className='m-0'>cancel</p></button>
             <div>
             <button className='btn rounded-pill px-3  me-2' onClick={(e) => missYesHandler(e)} ><p className='m-0'>Yes</p></button>
              <button className='btn rounded-pill px-3 me-2' onClick={(e) => missNoHandler(e)} ><p className='m-0'>No</p></button>
             </div>
             </div>
          )} >
              <div>
                <h6>{missdata?.productName} ...urgent?</h6>
              </div>
      </Modal>
      {editData && <Modal open={editItem} closable={false}  footer={(_, { OkBtn, CancelBtn }) => (
            <>
              <button className='btn rounded-pill px-3 py-1 btn-border me-2' onClick={editcancelHandler} ><p className='m-0'>Cancel</p></button>
              <button className='btn rounded-pill px-3 py-1 border-bac me-2' onClick={editOkHandler} ><p className='m-0'>Submit</p></button>
            </>
          )} >
        <div key={editData.id}>
          <h6 className='mt-3'>{editData.productName}</h6>
          <p></p>
          <div className='row'>
              <div className='col-sm-5 col-12'> 
                  <img src={editData.image_url} className='img-fluid' />
              </div>
              <div className='col-sm-7 col-12'>
                <div className='d-flex align-items-center'>
                  <p className='m-0'>Price</p>
                  <Input className='rounded-lg my-2 mx-3 input-width' value={editData.Price} placeholder='enter Price' />
                  <p>x6 + 1LB</p>
                </div>
                <div className='d-flex align-items-center'>
                  <p className='m-0'>Quantity</p>
                  <Input className='rounded-lg my-2 mx-3 input-width' value={editData.Quantity} placeholder='enter Quantity' />
                  <p>x6 + 1LB</p>
                </div>
                <div className='d-flex align-items-center py-1'>
                  <p className='mb-0 me-4'>Total</p>
                  <p className='mx-3 mb-0 text-large'>${editData.Quantity*editData.Price}</p>
                </div>
              </div>
          </div>
          <div>
            <p className='font-bold'>Choose Reason<span className='font-normal optional'>(Optional)</span></p>
              <div className='d-flex modal-btn'>
              <button className='btn rounded-pill px-2 btn-border me-2' ><p className='m-0'>Missing Products</p></button>
              <button className='btn rounded-pill px-2 btn-border me-2' ><p className='m-0'>Quantity i not the same</p></button>
              <button className='btn rounded-pill px-2 btn-border me-2' ><p className='m-0'>Price is not the same</p></button>
              <button className='btn rounded-pill px-3 btn-border ' ><p className='m-0'>others</p></button>
              </div>
          </div>
        </div>
      </Modal>}
    </Container>
    );
  }