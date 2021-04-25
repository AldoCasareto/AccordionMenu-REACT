import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({ question }) => {
  const [expand, setExpand] = useState(false);
  const { title, info } = question;
  // const showMoreInfo = () => {
  //   expand ? setExpand([]) : setExpand(info)
  // };

  return (
    <article className='question'>
      <header>
        <p>{title}</p>
        <button className='btn' onClick={() => setExpand(!expand)}>
          {expand ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {expand && <p>{info}</p>}
    </article>
  );
};

export default Question;
