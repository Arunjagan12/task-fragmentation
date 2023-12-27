import React from 'react';

export default function ChainSelector({
  title,
  openChainSelector,
  setOpenChainSelector,
  chains,
  selectedChain,
  setSelectedChain,
}) {
  const { openChainSelector, setOpenChainSelector, openChainSelectorModal } =
  useChainSelector();
  const { chains: receiveChains } = useWallet();
  const {
    supplies,
    allSupplies,
    setSuppliesChain,
    suppliesChain,
    fetchSupplies,
  } = useAppSupplies(true);
  return (
    <div>
      {/* UI elements for ChainSelector */}
      <p>ChainSelector Component</p>
    </div>
  );
};

