import React, { Children } from 'react'

//homeにpropでheroクラスをexportしている//
export default function Hero({children, hero }) {

    return <header className={hero}>
    {children}
    </header>;
}

Hero.defaultProps = {  //defaultHeroクラスを作っている(propなのでどこで定義してもよい)//
  hero: "defaultHero"

}
