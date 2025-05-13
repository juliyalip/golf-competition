import Image from "next/image"
import Container from "./container"

export default function Premier() {
    return (
        <Container>
            <div className="pt-[30px] mb-20 md:mb-30 text-center mx-auto  md:pt-17 lg:mt-20 lg:mb-35">
                <div className="relative mx-auto w-[130px] h-[80px] md:w-[200px] md:h-[100px] lg:w-[300px] lg-[150px]">
                    <Image src='/charity.svg' alt="logo charity" fill className="object-contain" />
                </div>
                <div className="mb-10 font-normal md:text-2xl mb:mb-20 lg:mb-15">PREMIER 2025</div>
                <h1 className="font-semibold text-2xl   md:text-2xl  lg:text-4xl ">Let’s Drive <br className="md:hidden" />Change!</h1>
            </div>
        </Container>
    )
}