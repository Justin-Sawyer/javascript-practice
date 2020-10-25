function insertCodeBlock() {

    document.getElementById("call-object-by-id-insert-text").innerText = `
I've just been inserted! Click the button again.`;
    document.getElementById("call-object-by-id-insert-text-code-block").innerText = `<button onclick="insertCodeBlock()">Click Me</button>
<pre id="call-object-by-id-insert-text"></pre>

<script>
    function insertCodeBlock() {
        document.getElementById("call-object-by-id-insert-text").innerText = "
            I've just been inserted! Click the button again."
    };
</script>`;
    console.clear();
};

function createCodeBlock() {

    let blockToInsert;
    let containerBlock;

    blockToInsert = document.createElement("P");
    blockToInsert.innerText = `I've just been created! Click the button again.`;

    containerBlock = document.getElementById("call-object-by-id-create-text");
    containerBlock.appendChild(blockToInsert);

    document.getElementById("call-object-by-id-create-text-code-block").innerText = `<button onclick="insertCodeBlock()">Click Me</button>
<pre id="call-object-by-id-create-text"></pre>

<script>
    function createCodeBlock() {
        let blockToInsert;
        let containerBlock;

        blockToInsert = document.createElement("blockquote");
        blockToInsert.innerText = 
            "I've just been created! Click the button again."

        containerBlock = document.getElementById("call-object-by-id-create-text");
        containerBlock.appendChild(blockToInsert);
    };
</script>`;
    console.clear();
};


/*function resetToOriginalId() {
    var x = document.getElementById("call-object-by-id");
  if (x.style.display === "block") {
    x.style.display = "none";
    console.clear();
    //x.removeChild(element.firstChild);
  } else {
    x.style.display = "block";
  };
};*/

