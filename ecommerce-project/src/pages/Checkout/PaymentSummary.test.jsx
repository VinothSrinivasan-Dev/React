
import { it, expect, describe, vi, beforeEach } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import { MemoryRouter, useLocation } from 'react-router';
import userEvent from '@testing-library/user-event';
import axios from 'axios';
import { PaymentSummary } from './PaymentSummary.jsx';

vi.mock('axios');

describe('PaymenrtSummary component', () => {
  let loadCart;
  let paymentSummary;

  beforeEach(() => {

    paymentSummary = {
      totalItems: 3,
      productCostCents: 4275,
      shippingCostCents: 499,
      totalCostBeforeTaxCents: 4774,
      taxCents: 477,
      totalCostCents: 5251
    };
    loadCart = vi.fn();

});

it('displays the payment summary details correctly', () => {


    render(
        <MemoryRouter>
            <PaymentSummary paymentSummary={paymentSummary} loadCart={loadCart} />
        </MemoryRouter>
    );

   expect(
    screen.getByTestId('payment-summary-product-cost')
   ).toHaveTextContent("$42.75");
});
it('calls create order and loadCart when Place your order button is clicked', async () => {
    function Location(){
        const location= useLocation();
        return <div data-testid="location-display">{location.pathname}</div>;
    }

    render(
        <MemoryRouter>
            <PaymentSummary paymentSummary={paymentSummary} loadCart={loadCart} />
            <Location />
        </MemoryRouter>
    );
    
    const user = userEvent.setup(); 
    const placeOrderButton = screen.getByTestId('place-order-button');

    await user.click(placeOrderButton);

    expect(axios.post).toHaveBeenCalledWith('/api/orders');
    expect(loadCart).toHaveBeenCalled();
    expect(screen.getByTestId('location-display')).toHaveTextContent('/orders');
  });
});