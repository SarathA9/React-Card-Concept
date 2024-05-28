import React from 'react'
import './name.css'
import { Link } from 'react-router-dom'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import DescriptionIcon from '@mui/icons-material/Description';
import CodeIcon from '@mui/icons-material/Code';
import ImportExportIcon from '@mui/icons-material/ImportExport';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import TouchAppIcon from '@mui/icons-material/TouchApp';
import TableChartIcon from '@mui/icons-material/TableChart';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import CardActions from '@mui/material/CardActions';




export default function home() {
  return (
    <div className='home'>
        <header>
            <h1>F<FingerprintIcon />lio</h1>
            <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/resume">Resume</a></li>
                <li><a href="/about">About</a></li>
            </ul>
            </nav>
        </header>
      <div className='link-div'>
      <Link className='link-text' to="/"><Button className='' variant="contained" >list</Button></Link>        
      <Link className='link-text' to="/employee"><Button variant="outlined" startIcon={<FormatListNumberedIcon />}>Employee</Button></Link>
      <Link className='link-text' to="/resume"><Button variant="outlined" startIcon={<DescriptionIcon />}>Resume</Button></Link>
      <Link className='link-text' to="/shopping"><Button variant="outlined" startIcon={<ShoppingCartIcon />}>shopping</Button></Link>
      <Link className='link-text' to="/card"><Button variant="outlined" startIcon={<CreditCardIcon />}>Card</Button></Link>
      <Link className='link-text' to="/table"><Button variant="outlined" startIcon={<TableChartIcon />}>Student</Button></Link>

      </div>

    </div>
  )
}
