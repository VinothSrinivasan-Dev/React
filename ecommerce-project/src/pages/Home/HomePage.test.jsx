import { it, expect, describe, vi, beforeEach } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import userEvent from '@testing-library/user-event';
import axios from 'axios';
import { Homepage } from './HomePage.jsx';

vi.mock('axios');

describe('HomePage component', () => {
  let loadCart;

  beforeEach(() => {
    loadCart = vi.fn();

    axios.get.mockImplementation(async (urlPath) => {
      if (urlPath.startsWith('http://localhost:3000/api/products')) {
        return {
          data: [{
            id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
            image: "images/products/athletic-cotton-socks-6-pairs.jpg",
            name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
            rating: {
              stars: 4.5,
              count: 87
            },
            priceCents: 1090,
            keywords: ["socks", "sports", "apparel"]
          },
          {
            id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
            image: "images/products/intermediate-composite-basketball.jpg",
            name: "Intermediate Size Basketball",
            rating: {
              stars: 4,
              count: 127
            },
            priceCents: 2095,
            keywords: ["sports", "basketballs"]
          }]
        };
      }
    });
  });

  it('displays the products correct', async () => {
    render(
      <MemoryRouter>
        <Homepage cart={[]} loadCart={loadCart} />
      </MemoryRouter>
    );
     
    const productContainers = await screen.findAllByTestId('product-container');

    expect(productContainers.length).toBe(2);

    expect(
      within(productContainers[0])
        .getByText('Black and Gray Athletic Cotton Socks - 6 Pairs')
    ).toBeInTheDocument();

    expect(
      within(productContainers[1])
        .getByText('Intermediate Size Basketball')
    ).toBeInTheDocument();
  });
  it('Checking Add Cart button in HomePage', async () => {

    render(
      <MemoryRouter>
        <Homepage cart={[]} loadCart={loadCart} />
      </MemoryRouter>
    );

    const productContainers = await screen.findAllByTestId('product-container');

    const addToCartButton1 = within(productContainers[0]).getByTestId('add-to-cart-button');

    const user = userEvent.setup();

    await user.click(addToCartButton1);

    const addToCartButton2 = within(productContainers[1]).getByTestId('add-to-cart-button');

     await user.click(addToCartButton2);
    
     expect(axios.post).toHaveBeenNthCalledWith(1,'/api/cart-items', {
      productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
      quantity: 1
    });
    expect(axios.post).toHaveBeenNthCalledWith(2,'/api/cart-items', {
      productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
      quantity: 1
    });

    expect(loadCart).toHaveBeenCalled(2);

  });

  it('Checking Qunatity Updation in HomePage', async () => {

    render(
        <MemoryRouter>
          <Homepage cart={[]} loadCart={loadCart} />
        </MemoryRouter>
      );
  
      const productContainers = await screen.findAllByTestId('product-container');

    const quantitySelect1= within(productContainers[0]).getByTestId('product-quantity-select');
    const quantitySelect2= within(productContainers[1]).getByTestId('product-quantity-select');

    const user = userEvent.setup();

      await user.selectOptions(quantitySelect1,'4');
   

   const addToCartButton1 = within(productContainers[0]).getByTestId('add-to-cart-button');


    await user.click(addToCartButton1);

    const addToCartButton2 = within(productContainers[1]).getByTestId('add-to-cart-button');
await user.selectOptions(quantitySelect2,'3');
     await user.click(addToCartButton2);

   expect(quantitySelect1).toHaveValue('4');
   expect(quantitySelect2).toHaveValue('3');
    
    //  expect(axios.post).toHaveBeenNthCalledWith(1,'/api/cart-items', {
    //   productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    //   quantity: 4
    // });
    // expect(axios.post).toHaveBeenNthCalledWith(2,'/api/cart-items', {
    //   productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
    //   quantity: 3
    // });

    // expect(loadCart).toHaveBeenCalled(2);
   
     
});

});