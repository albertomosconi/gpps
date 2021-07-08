const simulateClick = (el) => {
  if (el.fireEvent) el.fireEvent("onclick");
  else {
    let eventObject = document.createEvent("Events");
    eventObject.initEvent("click", true, false);
    el.dispatchEvent(eventObject);
  }
};

simulateClick(document.getElementsByTagName("button")[1]);
