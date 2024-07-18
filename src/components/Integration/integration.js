import { useEffect, useState } from "react";

const integrations = [
    {
      name: 'Mercado Livre',
      imgSrc: 'https://play-lh.googleusercontent.com/mKhI8xVa-ukFCTPrep10Q7hZ-S6fQFARVA-7jjI-9XhEsQ_WKOnW6ETq7VVNHd_4hj0',
    },
    {
      name: 'Magalu',
      imgSrc: 'https://www.ideianoar.com.br/wp-content/uploads/2021/05/magalu-marketplace-1.png',
    },
    {
      name: 'Shopee',
      imgSrc: 'https://t2.tudocdn.net/686406?w=1200&h=1200',
    },
    {
      name: 'B2W Digital',
      imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/e/e3/B2W_Digital_logo.png',
    },
    {
      name: 'Amazon',
      imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/2/29/AliExpress_logo.svg',
    },
    {
        name: 'Leroy Merlin',
        imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/2/29/AliExpress_logo.svg',
    },
    {
        name: 'Carrefour',
        imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/2/29/AliExpress_logo.svg',
    },
    {
        name: 'SubMarino',
        imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/2/29/AliExpress_logo.svg',
    },
    {
        name: 'Aliexpress',
        imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/2/29/AliExpress_logo.svg',
    },
    {
        name: 'Alibaba',
        imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/2/29/AliExpress_logo.svg',
    },
    {
        name: 'Shopify',
        imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/2/29/AliExpress_logo.svg',
    },
    {
        name: 'Ebay',
        imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/2/29/AliExpress_logo.svg',
    },
  ];

  const IntegrationGallery = () => {
    return (
      <div className="container mt-5">
        <div className="row">
          {integrations.map((integration, index) => (
            <div key={index} className="col-md-3 mb-3">
              <div className="card">
                <img
                  src={integration.imgSrc}
                  className="card-img-top"
                  alt={integration.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{integration.name}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default IntegrationGallery;