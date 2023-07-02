import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { closeAddNewTravelModal } from '@/client/utils/store/addTravelListSlice';
import style from './AddNewTravelModal.module.scss';
import DateRangeCalendar from '../DateRangeCalendar';
import axios from 'axios';
const AddNewTravelModal = () => {
  const isOpen = useSelector((state) => state.addTravelList.isOpen);
  const dispatch = useDispatch();
  const toggle = () => dispatch(closeAddNewTravelModal());
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const travelCountryRef = useRef();
  const addNewTravelHandler = () => {
    console.log(startDate, endDate, travelCountryRef.current.value);
    axios
      .post('/mytravel/allTrips.json', {
        country: travelCountryRef.current.value,
        startDate: startDate,
        endDate: endDate,
      })
      .then((res) => {
        if (res.status === 200) {
          toggle();
        }
      });
  };
  return (
    <div className={style.AddNewTravelModal}>
      <Modal isOpen={isOpen} toggle={toggle}>
        <ModalHeader toggle={toggle}>신규 여행지 추가</ModalHeader>
        <ModalBody>
          <label className={style.AddNewTravelModal__label}>여행 국가</label>
          <input
            type="text"
            ref={travelCountryRef}
            className={style.AddNewTravelModal__input}
          />
          <DateRangeCalendar
            startDate={startDate}
            setStartDate={(date) => {
              setStartDate(date);
            }}
            endDate={endDate}
            setEndDate={(date) => {
              setEndDate(date);
            }}
          />
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            취소
          </Button>
          <Button color="primary" onClick={addNewTravelHandler}>
            여행지 추가
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default AddNewTravelModal;
