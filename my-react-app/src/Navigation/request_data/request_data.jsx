import { useState } from "react";
import { OutputData } from "../output_data/output_data";

function RequestData() {
  return (
    <section id="requestData" className="section-sort">
      <h2>Виконання запитів</h2>

      <OutputData />
    </section>
  );
}
export { RequestData };


// import { useState } from "react";
// import { OutputData } from "../output_data/output_data";

// function RequestData() {
//   return (
//     <section id="requestData" className="section-sort">
//       <h2>Виконання запитів</h2>

//       <OutputData />
//     </section>
//   );
// }
// export { RequestData };
