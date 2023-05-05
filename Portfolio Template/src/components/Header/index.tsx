import { ReactNode, useContext } from "react";
import { HeaderFixedContext } from "../../HeaderContext";

export function Header(){
  const data = useContext(HeaderFixedContext);

  return(
    <div>
      {data === false? '' : 'Magalhoes eh mnha pomba fdp'}
      
    </div>
  )
}