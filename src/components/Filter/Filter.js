import s from "../Filter/Filter.module.css";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterValue } from "../../redux/contacts/actions";
import { getFilter } from "../../redux/contacts/selectors";

export default function Filter() {
  const dispatch = useDispatch();
  const value = useSelector(getFilter);

  const changeFilter = useCallback(
    (e) => {
      // setFilter(e.currentTarget.value); //сетим локально
      dispatch(filterValue(e.currentTarget.value)); //отправляем значение в редакс
    },
    [dispatch]
  );

  return (
    <>
      <label className={s.label}>Find contacts by name</label>
      <input
        className={s.input}
        type="text"
        value={value}
        onChange={changeFilter}
      ></input>
    </>
  );
}
