
// import React, { useState } from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids';

const Orders = () => {
    // const [orderActive ,orderInactive]=useState(true)
    const recentOrderData = [
        {
            id: '1',
            product_id: '4324',
            customer_id: '23143',
            customer_name: 'Shirley A. Lape',
            order_date: '2022-05-17T03:24:00',
            order_total: '$435.50',
            current_order_status: 'PLACED',
            shipment_address: 'Cottage Grove, OR 97424'
        },
        {
            id: '1',
            product_id: '4324',
            customer_id: '23143',
            customer_name: 'Shirley A. Lape',
            order_date: '2022-05-17T03:24:00',
            order_total: '$435.50',
            current_order_status: 'PLACED',
            shipment_address: 'Cottage Grove, OR 97424'
        },
        {
            id: '1',
            product_id: '4324',
            customer_id: '23143',
            customer_name: 'Shirley A. Lape',
            order_date: '2022-05-17T03:24:00',
            order_total: '$435.50',
            current_order_status: 'PLACED',
            shipment_address: 'Cottage Grove, OR 97424'
        }
      
    ];

    return (
        <div>
             <div className='flex pt-10  m-5'>
                    <h1 className='p-5'>Pending</h1>
                    <h1 className='p-5'>Accepted</h1>
                    <h1 className='p-5'>AWB Created</h1>
                    <h1 className='p-5'> Ready to Ship</h1>
                    <h1 className='p-5'>Shipped</h1>
                    <h1 className='p-5'>Completed</h1>
                    <h1 className='p-5'>Cancelled</h1>
            </div>
<GridComponent dataSource={recentOrderData} allowPaging={true}>
            <ColumnsDirective>
                <ColumnDirective field='id' headerText='ID' width='100' textAlign='Right' />
                <ColumnDirective field='product_id' headerText='Product ID' width='100' />
                <ColumnDirective field='customer_name' headerText='Customer Name' width='150' />
                <ColumnDirective field='order_date' headerText='Order Date' width='150' format='dd MMM yyyy' />
                <ColumnDirective field='order_total' headerText='Order Total' width='150' />
                <ColumnDirective field='shipment_address' headerText='Shipping Address' width='200' />
                <ColumnDirective field='current_order_status' headerText='Order Status' width='150' />
            </ColumnsDirective>
            <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit]} />
        </GridComponent>
        </div>
        
    );
};

export default Orders;
