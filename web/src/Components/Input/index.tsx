import React, { InputHTMLAttributes, useEffect, useRef, useCallback, useState } from 'react';
import { IconBaseProps } from 'react-icons' //passa as propriedades base de um icon
import { FiAlertCircle, FiAlertTriangle } from 'react-icons/fi';
import { useField } from '@unform/core';

import { Container, Error } from './styles';

import Tooltip from '../Tooltip/index';

// extendendo as propriedades do Input
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}

// const Input: React.FC<InputProps> = ({ name, icon: Icon, ...rest}) => {
//   /*valor do input <armazena a referencia de um input dentro do html>*/
//   const inputRef = useRef<HTMLInputElement>(null);

//   const [isFocused, setIsFocused] = useState(false);
//   const [isFilled, setIsFilled] = useState(false);

//   const { fieldName, defaultValue, error, registerField } = useField(name);

//   /**Essa função é criada uma unica vez, independente d qtas vez eu atualize, mude o estado, propriedades... */
//   const handleInputFocus = useCallback(() => {
//     setIsFocused(true);
//   }, []);

//   const handleInputBlur = useCallback(() => {
//     setIsFocused(false);
//     /* se o input tem conteudo (true) => setIsFocused(true)
//     if (inputRef.current?.value) {
//       setIsFocused(true);
//     } else {
//       setIsFocused(false)
//     }
//     *!! transforma o valor em booleano como true */
//     setIsFilled(!!inputRef.current?.value);
//   }, []);

//   useEffect(() => {
//     registerField({
//       name: fieldName,
//       ref: inputRef.current,
//       path: 'value',
//     })
//   }, [fieldName, registerField]);

//   return (
//   <Container isError={!!error} isFilled={isFilled} isFocused={isFocused}>
//     {Icon && <Icon size={20} />}
//     <input
//       //essa função é recriada td vez q o componente renderiza, entao usar: useCallback
//       //onFocus={() => {setIsFocused(true)}}
//       onFocus={handleInputFocus}
//       onBlur={handleInputBlur}
//       defaultValue={defaultValue}
//       ref={inputRef}
//       {...rest}
//     />

//     {error && (
//       //poderia fazer do modo 'padrao' importando Tooltip
//       <Error title={error}>
//         <FiAlertTriangle color="#c53030" size={20} />
//       </Error>
//     )}
//   </Container>
//   );
// };

// export default Input;

const Input: React.FC<InputProps> = ({ name, icon: Icon, ...rest }) => {
  const inputRef = useRef(null); //acesso ao elemeto na DOM - manipulo de forma direta
  const { defaultValue, error, fieldName, registerField } = useField(name);
  // qdo usar formulario de edição/trazer infos de outro lugar - 'update' - usar defaultValue.

//Efetuo o input, assim q o componente for exibido em tela
useEffect(() => {
  registerField({
    name: fieldName, //name/email...
    ref: inputRef.current, // ref da acesso ao input no HTML. O input fica dentro do 'current'
    path: 'value', // onde busca o valor, qual é o caminho a informação dentro do input
  });
}, [fieldName, registerField]); 

  return (
    <Container isError={!!error}>
      <div className="icon_input">
        {Icon && <Icon size={18} />}
        <input 
          defaultValue={defaultValue} 
          ref={inputRef} 
          {...rest}
        />
      </div>
      <div className="error">
        {error && 
          <Error>
            <FiAlertCircle size={16} color="#bd0000" />
            <Tooltip title={error}/>
          </Error>}
      </div>
    </Container>
  );
};

export default Input;