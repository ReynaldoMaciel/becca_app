import development from './development';
import qa from './qa'
import staging from './staging';
import production from './production';

// Modo desenvolvimento aponta para ambiente de desenvolvimento
// Modo release aponta para ambiente de QA
const enviroment = development;

export default enviroment;
