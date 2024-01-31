import { StlyedDiv, FlexCenter } from "@/styles/globals";
import { Button } from "@mui/base";
import { TextField } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const Navigation = () => {

  return (
    <StlyedDiv className="p-2 border-b">
      <div>

      <Link href={'/'}>
        <Image src="/images/namdaemun.svg" width={100} height={100} alt="logo" priority />
      </Link>
      <TextField label="search" className="w-80 bg-gray-200 !border-none !outline-none" />
      <Link className="flex" href={`tel:757-0095`}>
        <Image src="/images/telephone.png" width={20} height={20} alt="telephone" priority />
        <span>757-0095</span>
      </Link>
      <Button onClick={() => alert("장바구니가 클릭됐습니다")}>
        <Image src="/images/shopping-cart.png" width={20} height={30} alt="shopping cart" />
      </Button>
      </div>
    </StlyedDiv>
  )
}

export default Navigation;