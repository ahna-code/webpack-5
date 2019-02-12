import React from 'react';
import style from './Title.css';

const Title = props => <div><h1 className={style.heading}>{props.title}</h1> <h2 className={style.list}>{props.taskslist}</h2> <h3 className={style.task}>{props.tasks} task(s)</h3></div>

export default Title;

