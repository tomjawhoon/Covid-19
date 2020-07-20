export default () => {
    return (
        <div className="cen">
            <style jsx>
                {`
                .lds-ring {
                    display: inline-block;
                    position: relative;
                    width: 100px;
                    height: 100px;
                  }
                  .lds-ring div {
                    box-sizing: border-box;
                    display: block;
                    position: absolute;
                    width: 64px;
                    height: 64px;
                    margin: 8px;
                    border: 8px solid #fff;
                    border-radius: 50%;
                    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
                    border-color: #f36 transparent transparent transparent;
                  }
                  .lds-ring div:nth-child(1) {
                    animation-delay: -0.45s;
                  }
                  .lds-ring div:nth-child(2) {
                    animation-delay: -0.3s;
                  }
                  .lds-ring div:nth-child(3) {
                    animation-delay: -0.15s;
                  }
                  @keyframes lds-ring {
                    0% {
                      transform: rotate(0deg);
                    }
                    100% {
                      transform: rotate(360deg);
                    }
                  }

                  .cen{
                        height: 100vh;
                        width: 100%;
                        display : flex;
     
                  }
                  .centext{
                    width: 820px;
                    margin: 0 auto;
                    display : flex;
                    justify-content: center;
                    align-items: center;
                  }
                  
                `}
            </style>
            <div className="centext">
                <div className="lds-ring">


                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <h3>รอหน่อยนะจ๊ะ ....</h3>
            </div>


        </div>
    );
}