import { useState } from 'react';

/**
 * Custom hook to manage multiple modals based on icon/button clicks
 * @returns {Object} { openModals, toggleModal, openModal, closeModal, closeAllModals }
 */
export const useModalManager = () => {
  const [openModals, setOpenModals] = useState({});

  /**
   * Toggle a modal open/closed
   * @param {string} modalId - Unique identifier for the modal
   */
  const toggleModal = (modalId) => {
    setOpenModals((prev) => ({
      ...prev,
      [modalId]: !prev[modalId],
    }));
  };

  /**
   * Open a specific modal
   * @param {string} modalId - Unique identifier for the modal
   */
  const openModal = (modalId) => {
    setOpenModals((prev) => ({
      ...prev,
      [modalId]: true,
    }));
  };

  /**
   * Close a specific modal
   * @param {string} modalId - Unique identifier for the modal
   */
  const closeModal = (modalId) => {
    setOpenModals((prev) => ({
      ...prev,
      [modalId]: false,
    }));
  };

  /**
   * Close all open modals
   */
  const closeAllModals = () => {
    setOpenModals({});
  };

  /**
   * Check if a modal is open
   * @param {string} modalId - Unique identifier for the modal
   * @returns {boolean}
   */
  const isModalOpen = (modalId) => {
    return openModals[modalId] || false;
  };

  return {
    openModals,
    toggleModal,
    openModal,
    closeModal,
    closeAllModals,
    isModalOpen,
  };
};
