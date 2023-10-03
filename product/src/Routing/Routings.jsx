import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Product from '../Product/Product';
import AddProduct from '../Product/AddProduct';
import LimitedStock from '../Product/LimitedStock';
import BulkImport from '../Product/BulkImport';
import Datainbulk from '../Product/Datainbulk';

const Routings = () => {
  return (
    <>
      <Routes>
        <Route exact path="/product" element={<Product />} />
        <Route exact path="/add-product" element={<AddProduct />} />
        <Route exact path="/limited-stock" element={<LimitedStock />} />
        <Route exact path="/bulkimport" element={<BulkImport />} />
        <Route exact path="/datainbulk" element={<Datainbulk />} />
      </Routes>
    </>
  );
};

export default Routings;
