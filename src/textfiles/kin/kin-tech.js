import React from 'react';

const tech = ["React", "Express", "Node", "MongoDB", "Firebase"];

export default function list() {
      const items = tech.map((item)=> {
          return (<li className="flex items-center" key={item}><svg className="bg-cover h-4 w-4 shadow-2xl rounded-full mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>{item}</li>)
      })
      return [items];
    }
