import React from 'react'
import { quesdata } from '../adata/quesdata';

const Ques = () => {

  return (
    <>
      {quesdata.map((ques) => {
        const { id, question, opt1, opt2, opt3, opt4 } = ques;
        return (
          <div className='p-4 mx-auto bg-purple-600 mb-2 mt-2 text-white w-2/4'>
            <div className='flex'>
              <div className='px-4'>{id}.</div>
              <div>{question}</div>
            </div>
            <div className='mx-12 mt-4'>
              <ol>{opt1}</ol>
              <ol>{opt2}</ol>
              <ol>{opt3}</ol>
              <ol>{opt4}</ol>
            </div>
          </div>
        )
      })}
    </>
  );
};

export default Ques;