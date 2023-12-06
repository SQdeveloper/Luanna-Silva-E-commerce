import React from 'react';
import Header from '../../Components/Header/Header';
import './RefundPolicy.css';

const RefundPolicy = () => {
    return (
        <>
            <Header/>
            <section className="refundPolicy">
                <h1>Refund Policy</h1>
                <h2>Change a product by size or model - LIMA</h2>
                <ul>
                    <li>Exchanges will only be processed for products contained in orders placed within 7 days from the date of delivery of the order.</li>
                    <li>The exchange will be made as long as the product is in perfect condition, with its original packaging and tags and no signs of use.</li>
                    <li>In case the new product has a higher price, the customer must add the difference.</li>
                    <li>Products purchased at SALE (50%, 70%) are not subject to exchange or refund.</li>
                    <li>To make a change: Send a message to our whatsapp +51 960399244 with the following information: Full names, ID, order number, photo of the ticket and the order code you want to change. After confirming all the data, you will be sent the confirmation and you can approach a store to make the change.</li>
                </ul>
                <h2>Change a product by size or model - PROVINCIA</h2>
                <ul>
                    <li>For returns from the province, the customer must assume s/15 of the cost of shipping the garment(s) to our offices in Lima. Once the garments are in our warehouses, we will proceed to the corresponding exchange and shipment.</li>
                </ul>
                <h2>In case you do not find another product of your liking to manage the exchange</h2>
                <ul>
                    <li>A credit note will be issued for the value, there is no refund for the difference. The credit note is valid for one year from the date it is issued. For any questions or specific size request, please call (51) 7196666 extension 121, indicating the # of your order, full name and receipt of your purchase.</li>                    
                </ul>
                <h2>You may request a refund if and only if:</h2>
                <ul>
                    <li>The product arrived with manufacturing flaws</li>
                    <li>The requested product was not delivered within 3 weeks.</li>
                    <li>Products purchased in PROMOTION are not subject to refunds.</li>
                </ul>
                <h2>Documentos que debes presentar:</h2>
                <ul>
                    <li>Purchase ticket, invoice or gift voucher.</li>
                    <li>ID card or foreigner's card or passport.</li>
                </ul>
            </section>
        </>
    );
};

export default RefundPolicy;