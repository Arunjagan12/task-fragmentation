import React from 'react';
import BurnButtonBar from './components/BurnButtonBar';
import BurnStatsContainer from './components/BurnStatsContainer';
import TransactionTableStyled from './components/TransactionTableStyled';
import ChainSelector from './components/ChainSelector';
import AppToast from './components/AppToast';

const BurnPage = () => {
  return (
    <div>
      {/* Use the imported components here */}
      <BurnButtonBar />
      <BurnStatsContainer />
      <TransactionTableStyled />
      <ChainSelector  title={"Switch Token Chain"}
        openChainSelector={openChainSelector}
        setOpenChainSelector={setOpenChainSelector}
        chains={receiveChains}
        selectedChain={suppliesChain}
        setSelectedChain={setSuppliesChain} />
      <AppToast
        position={{ vertical: "bottom", horizontal: "center" }}
        message={toastMsg}
        severity={toastSev} />
    </div>
  );
};

export default BurnPage;