import React from 'react';
import { Button } from 'reactstrap';
import { FiPlus } from 'react-icons/fi';
import style from './AddNewTravelButton.module.scss';
import { useDispatch } from 'react-redux';
import { showAddNewTravelModal } from '@/client/utils/store/addTravelListSlice';
const AddNewTravelButton = () => {
  const dispatch = useDispatch();
  const openNewTravelModalHandler = () => {
    dispatch(showAddNewTravelModal());
  };
  return (
    <Button
      color="primary"
      className={style.AddNewTravelButton}
      onClick={openNewTravelModalHandler}
    >
      <FiPlus />
    </Button>
  );
};

export default AddNewTravelButton;
