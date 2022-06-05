import React from "react";

import { getProductDate } from "../../firebase";

export default function MenProducts() {
  getProductDate();
  return <div>MenProducts</div>;
}
