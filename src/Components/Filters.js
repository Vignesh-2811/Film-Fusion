import React, { useState, Fragment } from 'react';
import { CategoriesData } from '../Data/CategoriesData';
import { Listbox, Transition } from '@headlessui/react';
import { CgSelect } from 'react-icons/cg';
const YearData = [
  { title: 'Sort By Year' },
  { title: '1700 - 1800' },
  { title: '1800 - 1900' },
  { title: '1900 - 2000' },
  { title: '2000 - 2010' },
  { title: '2010 - 2030' },
];

const TimesData = [
  { title: 'Sort By Hours' },
  { title: '1 - 5 Hours' },
  { title: '5 - 10 Hours' },
  { title: '10 - 15 Hours' },
  { title: '15 - 20 Hours' },
];

const RatesData = [
  { title: 'Sort By Rating' },
  { title: '1 Star' },
  { title: '2 Star' },
  { title: '3 Star' },
  { title: '4 Star' },
  { title: '5 Star' },
];

function Filters() {
  const [category, setCategory] = useState({ title: 'Category' });
  const [year, setYear] = useState(YearData[0]);
  const [times, setTimes] = useState(TimesData[0]);
  const [rates, setRates] = useState(RatesData[0]);

  const Filter = [
    {
      value: category,
      onchange: setCategory,
      items: CategoriesData,
    },
    {
      value: year,
      onchange: setYear,
      items: YearData,
    },
    {
      value: times,
      onchange: setTimes,
      items: TimesData,
    },
    {
      value: rates,
      onchange: setRates,
      items: RatesData,
    },
  ];
  return (
    <div className='my-6 bg-dry border text-dryGray border-gray-800 grid md:grid-cols-4 grid-cols-2 lg:gap-12 gap-2 rounded p-6'>
      {Filter.map((item, index) => (
        <Listbox key={index} value={item.value} onchange={item.onchange}>
          <div className='relative'>
            <Listbox.Button className='relative border border-gray-800 w-full text-white bg-main  rounded-lg shadow-sm cursor-default py-4 pl-6 pr-10 text-left text-xs'>
              <span className='block truncate'>{item.title}</span>
              <span className='absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none '>
                <CgSelect className='h-5 w-5' aria-hidden='true' />
              </span>
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave='transition ease-in duration-100'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <Listbox.Options className='absolute bg-white z-10 mt-1 w-full bg-dry border border-gray-800 text-dryGray rounded-md shadow-lg max-h-60 py-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm'>
                {item.items.map((iterm, i) => (
                  <Listbox.Option
                    key={i}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? 'bg-subMain text-white' : 'text-main'
                      }`
                    }
                    value={iterm}
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected
                              ? 'font-semibold text-white'
                              : 'font-normal text-white'
                          }`}
                        >
                          {iterm.title}
                        </span>
                        {selected ? (
                          <span className='absolute inset-y-0 left-0 flex items-center pl-3'>
                            <p>e</p>
                          </span>
                        ) : null}
                      </>
                    )}
                    {iterm.title}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
      ))}
    </div>
  );
}

export default Filters;
