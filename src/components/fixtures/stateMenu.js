import React from 'react';
import overview from '../../assets/sidebar/main/overview.svg';
import allorders from '../../assets/sidebar/orders/all-orders.svg';
import pendingorders from '../../assets/sidebar/orders/pending-orders.svg';
import reconciledorders from '../../assets/sidebar/orders/reconciled-orders.svg';
import all from '../../assets/sidebar/payments/all-payment.svg';
import manual from '../../assets/sidebar/payments/manual-payment.svg';
import reconciled from '../../assets/sidebar/payments/reconciled.svg';
import unreconciled from '../../assets/sidebar/payments/un-reconciled.svg';
import profilepicture from '../../assets/sidebar/profile.svg';

export const stateMenu = {
  main: [
    {
      icon: <img src={overview} alt="overview" />,
      name: 'Overview'
    }
  ],
  payments: [
    {
      icon:  <img src={all} alt="all" />,
      name: 'All Payments'
    },
    {
      icon: <img src={reconciled} alt="reconciled" />,
      name: 'Reconciled Payments'
    },
    {
      icon: <img src={unreconciled} alt="unreconciled" />,
      name: 'Un-Reconciled Payments'
    },
    {
      icon: <img src={manual} alt="manual" />,
      name: 'Manual Statements'
    }
  ],
  orders: [
    {
      icon: <img src={allorders} alt="allorders" />,
      name: 'All Orders'
    },
    {
      icon: <img src={pendingorders} alt="pendingorders" />,
      name: 'Pending Orders'
    },
    {
      icon: <img src={reconciledorders} alt="reconciledorders" />,
      name: 'Reconciled Orders'
    }
  ],
  profile: [
    {
      icon: <img src={profilepicture} alt="profilepicture" />,
      name: 'Merchant Profile'
    }
  ]
};
