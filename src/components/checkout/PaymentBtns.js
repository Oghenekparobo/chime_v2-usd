import React from 'react'

const PaymentBtns = ({selectPaymentMethod}) => {
  return (
    <div className="space-y-4">
            <button
              onClick={() => selectPaymentMethod("paystack")}
              className="w-full flex items-center justify-center bg-green-500 text-white py-3 rounded-lg"
            >
              <div className="icon mr-2">
                <svg
                  class="w-24 h-6"
                  viewBox="-131.2 222 600.2 106.9"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m-45.8 232.2h-80.4c-2.7 0-5 2.3-5 5.1v9.1c0 2.8 2.3 5.1 5 5.1h80.4c2.8 0 5-2.3 5.1-5.1v-9c0-2.9-2.3-5.2-5.1-5.2zm0 50.5h-80.4c-1.3 0-2.6.5-3.5 1.5-1 1-1.5 2.2-1.5 3.6v9.1c0 2.8 2.3 5.1 5 5.1h80.4c2.8 0 5-2.2 5.1-5.1v-9.1c-.1-2.9-2.3-5.1-5.1-5.1zm-35.1 25.2h-45.3c-1.3 0-2.6.5-3.5 1.5s-1.5 2.2-1.5 3.6v9.1c0 2.8 2.3 5.1 5 5.1h45.2c2.8 0 5-2.3 5-5v-9.1c.1-3-2.1-5.3-4.9-5.2zm40.2-50.5h-85.5c-1.3 0-2.6.5-3.5 1.5s-1.5 2.2-1.5 3.6v9.1c0 2.8 2.3 5.1 5 5.1h85.4c2.8 0 5-2.3 5-5.1v-9.1c.1-2.8-2.2-5-4.9-5.1zm0 0"
                    fill="#00c3f7"
                  />
                  <path
                    d="m52.8 252.6c-2.5-2.6-5.4-4.6-8.7-6s-6.8-2.1-10.4-2.1c-3.5-.1-6.9.7-10.1 2.2-2.1 1-4 2.4-5.6 4.1v-1.6c0-.8-.3-1.6-.8-2.2s-1.3-1-2.2-1h-11.1c-.8 0-1.6.3-2.1 1-.6.6-.9 1.4-.8 2.2v74.8c0 .8.3 1.6.8 2.2.6.6 1.3.9 2.1.9h11.4c.8 0 1.5-.3 2.1-.9.6-.5 1-1.3.9-2.2v-25.6c1.6 1.8 3.7 3.1 6 3.9 3 1.1 6.1 1.7 9.3 1.7 3.6 0 7.2-.7 10.5-2.1s6.3-3.4 8.8-6c2.6-2.7 4.6-5.9 6-9.4 1.6-3.9 2.3-8.1 2.2-12.3.1-4.2-.7-8.4-2.2-12.4-1.5-3.3-3.5-6.5-6.1-9.2zm-10.2 27.1c-.6 1.6-1.5 3-2.7 4.3-2.3 2.5-5.6 3.9-9 3.9-1.7 0-3.4-.3-5-1.1-1.5-.7-2.9-1.6-4.1-2.8s-2.1-2.7-2.7-4.3c-1.3-3.4-1.3-7.1 0-10.5.6-1.6 1.6-3 2.7-4.2 1.2-1.2 2.6-2.2 4.1-2.9 1.6-.7 3.3-1.1 5-1.1 1.8 0 3.4.3 5.1 1.1 1.5.7 2.9 1.6 4 2.8 1.2 1.2 2 2.6 2.7 4.2 1.2 3.5 1.1 7.2-.1 10.6zm79.6-33.6h-11.3c-.8 0-1.6.3-2.1.9-.6.6-.9 1.4-.9 2.3v1.4c-1.4-1.7-3.2-3-5.1-3.9-3.1-1.5-6.5-2.2-9.9-2.2-7.3 0-14.2 2.9-19.4 8-2.7 2.7-4.8 5.9-6.2 9.4-1.6 3.9-2.4 8.1-2.3 12.4-.1 4.2.7 8.4 2.3 12.4 1.5 3.5 3.5 6.7 6.2 9.4 5.1 5.2 12.1 8.1 19.3 8.1 3.4.1 6.8-.7 9.9-2.2 1.9-1 3.8-2.3 5.2-3.9v1.5c0 .8.3 1.6.9 2.2.6.5 1.3.9 2.1.9h11.3c.8 0 1.6-.3 2.1-.9.6-.6.9-1.4.9-2.2v-50.3c0-.8-.3-1.6-.8-2.2-.6-.7-1.4-1.1-2.2-1.1zm-15.3 33.6c-.6 1.6-1.5 3-2.7 4.3-1.2 1.2-2.5 2.2-4 2.9-3.2 1.5-6.9 1.5-10.1 0-1.5-.7-2.9-1.7-4.1-2.9s-2.1-2.7-2.7-4.3c-1.2-3.4-1.2-7.1 0-10.5.6-1.6 1.5-2.9 2.7-4.2 1.2-1.2 2.5-2.2 4.1-2.9 3.2-1.5 6.9-1.5 10 0 1.5.7 2.9 1.6 4 2.8s2 2.6 2.7 4.2c1.4 3.5 1.4 7.2.1 10.6zm127.9-6.8c-1.6-1.4-3.5-2.6-5.5-3.4-2.1-.9-4.4-1.5-6.6-2l-8.6-1.7c-2.2-.4-3.8-1-4.6-1.7-.7-.5-1.2-1.3-1.2-2.2s.5-1.7 1.6-2.4c1.5-.8 3.1-1.2 4.8-1.1 2.2 0 4.4.5 6.4 1.3 2 .9 3.9 1.8 5.7 3 2.5 1.6 4.7 1.3 6.2-.5l4.1-4.7c.8-.8 1.2-1.8 1.3-2.9-.1-1.2-.7-2.2-1.6-3-1.7-1.5-4.5-3.1-8.2-4.7s-8.4-2.4-13.9-2.4c-3.4-.1-6.7.4-9.9 1.4-2.7.9-5.3 2.2-7.6 3.9-2.1 1.6-3.7 3.6-4.9 6-1.1 2.3-1.7 4.8-1.7 7.3 0 4.7 1.4 8.5 4.2 11.3s6.5 4.7 11.1 5.6l9 2c1.9.3 3.9.9 5.7 1.8 1 .4 1.6 1.4 1.6 2.5 0 1-.5 1.9-1.6 2.7s-2.9 1.3-5.3 1.3-4.9-.5-7.1-1.6c-2.1-1-4-2.3-5.8-3.8-.8-.6-1.6-1.1-2.6-1.5-1-.3-2.3 0-3.6 1.1l-4.9 3.7c-1.4 1-2.1 2.7-1.7 4.3.3 1.7 1.6 3.3 4.1 5.2 6.2 4.2 13.6 6.4 21.1 6.2 3.5 0 7-.4 10.3-1.4 2.9-.9 5.6-2.2 8-4 2.2-1.6 4-3.7 5.2-6.2 1.2-2.4 1.8-5 1.8-7.7.1-2.4-.4-4.8-1.4-7-1-1.6-2.3-3.3-3.9-4.7zm49.4 13.7c-.5-.9-1.4-1.5-2.5-1.7-1 0-2.1.3-2.9.9-1.4.9-3 1.4-4.6 1.5-.5 0-1.1-.1-1.6-.2-.6-.1-1.1-.4-1.5-.8-.5-.5-.9-1.1-1.2-1.7-.4-1-.6-2-.5-3v-20.5h14.6c.9 0 1.7-.4 2.3-1s1-1.3 1-2.2v-8.7c0-.9-.3-1.7-1-2.2-.6-.6-1.4-.9-2.2-.9h-14.7v-14c0-.8-.3-1.7-.9-2.2s-1.3-.8-2.1-.9h-11.4c-.8 0-1.6.3-2.2.9s-1 1.4-1 2.2v14h-6.5c-.8 0-1.6.3-2.2 1-.5.6-.8 1.4-.8 2.2v8.7c0 .8.3 1.6.8 2.2.5.7 1.3 1 2.2 1h6.5v24.4c-.1 2.9.5 5.8 1.7 8.4 1.1 2.2 2.5 4.1 4.4 5.7 1.8 1.5 3.9 2.6 6.2 3.2 2.3.7 4.7 1.1 7.1 1.1 3.1 0 6.3-.5 9.3-1.5 2.8-.9 5.3-2.5 7.3-4.6 1.3-1.3 1.4-3.4.4-4.9zm61.8-40.5h-11.3c-.8 0-1.5.3-2.1.9s-.9 1.4-.9 2.3v1.4c-1.4-1.7-3.1-3-5.1-3.9-3.1-1.5-6.5-2.2-9.9-2.2-7.3 0-14.2 2.9-19.4 8-2.7 2.7-4.8 5.9-6.2 9.4-1.6 3.9-2.4 8.1-2.3 12.3-.1 4.2.7 8.4 2.3 12.4 1.4 3.5 3.6 6.7 6.2 9.4 5.1 5.2 12 8.1 19.3 8.1 3.4.1 6.8-.7 9.9-2.1 2-1 3.8-2.3 5.2-3.9v1.5c0 .8.3 1.6.9 2.1.6.6 1.3.9 2.1.9h11.3c1.7 0 3-1.3 3-3v-50.3c0-.8-.3-1.6-.8-2.2-.5-.7-1.3-1.1-2.2-1.1zm-15.2 33.6c-.6 1.6-1.5 3-2.7 4.3-1.2 1.2-2.5 2.2-4 2.9-1.6.7-3.3 1.1-5.1 1.1s-3.4-.4-5-1.1c-1.5-.7-2.9-1.7-4.1-2.9s-2.1-2.7-2.6-4.3c-1.2-3.4-1.2-7.1 0-10.5.6-1.6 1.5-3 2.6-4.2 1.2-1.2 2.6-2.2 4.1-2.9 1.6-.7 3.3-1.1 5-1.1s3.4.3 5.1 1.1c1.5.7 2.8 1.6 4 2.8s2.1 2.6 2.7 4.2c1.3 3.4 1.3 7.2 0 10.6zm77.2 6.1-6.5-5c-1.2-1-2.4-1.3-3.4-.9-.9.4-1.7 1-2.4 1.7-1.4 1.7-3.1 3.2-4.9 4.5-2 1.1-4.1 1.7-6.3 1.5-2.6 0-5-.7-7.1-2.2s-3.7-3.5-4.5-6c-.6-1.7-.9-3.4-.9-5.1 0-1.8.3-3.5.9-5.3.6-1.6 1.4-3 2.6-4.2s2.5-2.2 4-2.8c1.6-.7 3.3-1.1 5.1-1.1 2.2-.1 4.4.5 6.3 1.6 1.9 1.2 3.5 2.7 4.9 4.5.6.7 1.4 1.3 2.3 1.7 1 .4 2.2.1 3.4-.9l6.5-4.9c.8-.5 1.4-1.3 1.7-2.2.4-1 .3-2.1-.3-3-2.5-3.9-5.9-7.1-10-9.4-4.3-2.4-9.4-3.7-15.1-3.7-4 0-8 .8-11.8 2.3-3.6 1.5-6.8 3.6-9.5 6.3s-4.9 5.9-6.4 9.5c-3.1 7.5-3.1 15.9 0 23.4 1.5 3.5 3.6 6.8 6.4 9.4 5.7 5.6 13.3 8.6 21.3 8.6 5.7 0 10.8-1.3 15.1-3.7 4.1-2.3 7.6-5.5 10.1-9.5.5-.9.6-2 .3-2.9-.4-.8-1-1.6-1.8-2.2zm60.2 11.7-17.9-26.2 15.3-20.2c.7-.9 1-2.2.6-3.3-.3-.8-1-1.6-2.9-1.6h-12.1c-.7 0-1.4.2-2 .5-.8.4-1.4 1-1.8 1.7l-12.2 17.1h-2.9v-40.4c0-.8-.3-1.6-.9-2.2s-1.3-.9-2.1-.9h-11.3c-.8 0-1.6.3-2.2.9s-.9 1.3-.9 2.2v74.5c0 .9.3 1.6.9 2.2s1.4.9 2.2.9h11.3c.8 0 1.6-.3 2.1-.9.6-.6.9-1.4.9-2.2v-19.7h3.2l13.3 20.4c.8 1.5 2.3 2.4 3.9 2.4h12.7c1.9 0 2.7-.9 3.1-1.7.5-1.2.4-2.5-.3-3.5zm-281.8-51.4h-12.7c-1 0-1.9.3-2.6 1-.6.6-1 1.3-1.2 2.1l-9.4 34.8h-2.3l-10-34.8c-.2-.7-.5-1.4-1-2.1-.6-.7-1.4-1.1-2.3-1.1h-12.9c-1.7 0-2.7.5-3.2 1.7-.3 1-.3 2.1 0 3.1l16 49c.3.7.6 1.5 1.2 2 .6.6 1.5.9 2.4.9h6.8l-.6 1.6-1.5 4.5c-.5 1.4-1.3 2.6-2.5 3.5-1.1.8-2.4 1.3-3.8 1.2-1.2 0-2.3-.3-3.4-.7-1.1-.5-2.1-1.1-3-1.8-.8-.6-1.8-.9-2.9-.9h-.1c-1.2.1-2.3.7-2.9 1.8l-4 5.9c-1.6 2.6-.7 4.2.3 5.1 2.2 2 4.7 3.5 7.5 4.4 3.1 1.1 6.3 1.6 9.5 1.6 5.8 0 10.6-1.6 14.3-4.7 3.8-3.4 6.7-7.8 8.1-12.8l18.6-60.6c.4-1.1.5-2.2.1-3.2-.1-.7-.8-1.5-2.5-1.5zm0 0"
                    fill="#011b33"
                  />
                </svg>
              </div>
            </button>
            <button
              onClick={() => selectPaymentMethod("flutterwave")}
              className="w-full flex items-center justify-center bg-yellow-500 text-white py-3 rounded-lg"
            >
              <div className="icon mr-2">
                <svg
                  width="150"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1013.12 241.26"
                >
                  <rect
                    fill="#2a3362"
                    x="328.78"
                    y="82.1"
                    width="16.11"
                    height="80.89"
                  ></rect>
                  <path
                    fill="#2a3362"
                    d="M407.24,135.58c0,11.44-7.36,16.58-17.16,16.58s-16.35-5.14-16.35-16V106.62H357.62V139.9c0,16.57,10.39,26.26,27.67,26.26,10.86,0,16.93-4,21-8.52h.94l1.4,7.36h14.82V106.62H407.24Z"
                  ></path>
                  <path
                    fill="#2a3362"
                    d="M565.27,153.44c-11.79,0-18.44-5.37-19.49-13.19h51.13a33.78,33.78,0,0,0,.35-4.91c-.11-21-16-29.89-33-29.89-19.73,0-34.56,11.8-34.56,30.83,0,18.09,14.25,29.88,35.61,29.88,17.87,0,29.77-7.93,32.23-20.08H581.62C579.63,150.87,573.91,153.44,565.27,153.44Zm-1-35.26c10.28,0,16.23,4.55,17.17,11H546.13C547.64,123,553.6,118.18,564.22,118.18Z"
                  ></path>
                  <path
                    fill="#2a3362"
                    d="M624.63,115h-1l-1.52-8.41H607.47V165h16.11V139.9c0-11.33,6.53-17.63,18.68-17.63a32.5,32.5,0,0,1,6.58.58V106.62h-2.25C635.85,106.62,629.18,108.84,624.63,115Z"
                  ></path>
                  <polygon
                    fill="#2a3362"
                    points="727.94 146.78 727.01 146.78 713.23 110.24 696.65 110.24 683.11 146.67 682.06 146.67 669.22 106.62 653.22 106.62 672.95 165 690.47 165 704.48 127.75 705.41 127.75 719.19 165 736.82 165 756.55 106.62 740.55 106.62 727.94 146.78"
                  ></polygon>
                  <path
                    fill="#2a3362"
                    d="M820.67,148V128.46c0-15.88-13.43-23-30.13-23-17.74,0-28.83,8.41-30.35,21H776.3c1.17-5.49,5.84-8.52,14.24-8.52s14,3.15,14,9.57V129l-26.27,2c-12.14.94-21,6.31-21,17.75,0,11.79,10.16,17.39,25.1,17.39,12.06,0,19.41-3.36,23.91-8.43h.8c2.53,5.7,7.66,7.27,13.24,7.27h6.77V153.09h-1.52C822.18,153.09,820.67,151.46,820.67,148Zm-16.12-6.19c0,9.23-11,12.26-20.43,12.26-6.42,0-10.62-1.63-10.62-6.07,0-4,3.62-5.95,9-6.42l22.06-1.63Z"
                  ></path>
                  <polygon
                    fill="#2a3362"
                    points="880.23 106.62 861.43 148.89 860.38 148.89 841.35 106.62 823.95 106.62 851.15 165 870.42 165 897.5 106.62 880.23 106.62"
                  ></polygon>
                  <path
                    fill="#2a3362"
                    d="M949,146.08c-2,4.79-7.71,7.36-16.35,7.36-11.79,0-18.44-5.37-19.49-13.19h51.13a33.78,33.78,0,0,0,.35-4.91c-.11-21-16-29.89-33-29.89-19.73,0-34.55,11.8-34.55,30.83,0,18.09,14.24,29.88,35.6,29.88,17.87,0,29.77-7.93,32.23-20.08Zm-17.4-27.9c10.28,0,16.23,4.55,17.17,11H913.47C915,123,920.94,118.18,931.56,118.18Z"
                  ></path>
                  <path
                    fill="#2a3362"
                    d="M302.6,102.32c0-5.14,3.62-7.35,8.29-7.35a24.17,24.17,0,0,1,6.42.93L320,84.22a36.71,36.71,0,0,0-12.14-2.1c-11.91,0-21.48,6.31-21.48,19.38v5.12h-13.9v12.79h13.9V165H302.6v-45.6h18.16V106.62H302.6Z"
                  ></path>
                  <path
                    fill="#2a3362"
                    d="M459,90.16H444l-.84,16.46H430.48v12.79h12.38v28.78c0,9.8,5,18,20,18a52.84,52.84,0,0,0,11.56-1.28V152.62a34.29,34.29,0,0,1-6.66.82c-8.05,0-8.75-4.55-8.75-8.06v-26h16V106.62H459Z"
                  ></path>
                  <path
                    fill="#2a3362"
                    d="M509.59,90.16H494.64l-.84,16.46H481.09v12.79h12.38v28.78c0,9.8,5,18,20,18A52.84,52.84,0,0,0,525,164.88V152.62a34.29,34.29,0,0,1-6.66.82c-8.05,0-8.75-4.55-8.75-8.06v-26h16.05V106.62H509.59Z"
                  ></path>
                  <path
                    fill="#009a46"
                    d="M48.23,79.89c0-9.37,2.74-17.37,8.49-23.12l10,10C55.59,77.86,65.31,112.34,97,144.06s66.19,41.43,77.31,30.32l10,10c-18.76,18.76-61.49,5.45-97.26-30.33C62.24,129.23,48.23,101.07,48.23,79.89Z"
                  ></path>
                  <path
                    fill="#ff5805"
                    d="M111.29,193c-9.37,0-17.37-2.74-23.13-8.49l10-10c11.11,11.11,45.59,1.39,77.31-30.32S216.89,78,205.78,66.89l10-10c18.77,18.76,5.45,61.49-30.33,97.26C160.63,179,132.47,193,111.29,193Z"
                  ></path>
                  <path
                    fill="#f5afcb"
                    d="M188.76,139.84c-6.07-17.48-18.47-36.16-34.92-52.6-35.77-35.78-78.5-49.1-97.26-30.33h0c-1.33,1.34-.18,4.65,2.58,7.41s6.07,3.9,7.4,2.57c11.12-11.11,45.6-1.39,77.31,30.33,15,15,26.18,31.75,31.57,47.25,4.72,13.59,4.26,24.55-1.24,30.05h0c-1.34,1.33-.18,4.65,2.57,7.4s6.07,3.91,7.41,2.57C193.79,174.88,195.42,159,188.76,139.84Z"
                  ></path>
                  <path
                    fill="#ff9b00"
                    d="M215.76,56.91c-9.63-9.63-25.49-11.26-44.67-4.59-17.47,6.06-36.16,18.47-52.6,34.91C82.72,123,69.4,165.73,88.16,184.5h0c1.34,1.33,4.65.18,7.41-2.57s3.91-6.07,2.57-7.41C87,163.41,96.75,128.93,128.47,97.21c15-15,31.75-26.18,47.25-31.57,13.59-4.71,24.55-4.26,30.06,1.24h0c1.33,1.33,4.65.18,7.4-2.58S217.09,58.24,215.76,56.91Z"
                  ></path>
                </svg>
              </div>
            </button>
          </div>
  )
}

export default PaymentBtns