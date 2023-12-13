import { ProjectType } from '../@types/type';
import calculator from '../assets/calculator.png';
import pixelEditor from '../assets/pixel-editor.png';
import todoList from '../assets/todo-list.png';
import weather from '../assets/weather.png';

export const projects: ProjectType[] = [
  {
    name: 'calculator',
    imgUrl: calculator,
    deployUrl: 'https://google.com',
    repoUrl: 'https://google.com',
    techList: ['javascript', 'css', 'html'],
  },
  {
    name: 'pixel-editor',
    imgUrl: pixelEditor,
    deployUrl: 'https://google.com',
    repoUrl: 'https://google.com',
    techList: ['javascript', 'css', 'html'],
  },
  {
    name: 'todo-list',
    imgUrl: todoList,
    deployUrl: 'https://google.com',
    repoUrl: 'https://google.com',
    techList: ['javascript', 'css', 'html'],
  },
  {
    name: 'weather',
    imgUrl: weather,
    deployUrl: 'https://google.com',
    repoUrl: 'https://google.com',
    techList: ['javascript', 'css', 'html'],
  },
];

export const contents = {
  aboutMe: [
    `Oi, meu nome é Vinícius Bueno Costa, eu entrei na Universidade 
    Federal de Itajubá em 2018, no curso de Engenharia Mecânica, mas 
    durante esse período descobri que o que eu queria, de fato, era me 
    tornar um programador.`,

    `Dessa forma, interrompi meus estudos na UNIFEI e decidi estudar o 
    que eu pudesse sobre programação, iniciei de forma autodidata, com 
    o apoio de materiais técnicos e seguindo alguns cursos.`,

    `Após um ano nesse modelo, percebi que era necessário fazer uma 
    pausa no meu trabalho, que no momento era de garçom, para focar em 
    me desenvolver profissionalmente. Desde então, tenho estudado 
    programação full-stack na Trybe.`,
  ],

};