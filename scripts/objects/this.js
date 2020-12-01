function thisExplain() {
    let hitchhikers = {
        protagonist: "Ford Prefect",
        earthling: "Arthur Dent",
        president: "Zaphod Beeblebrox",
        designer: "Slarty Bartfast",
        loveInterest: "Trillian",
        statement: function() {
            document.getElementById("characters").innerHTML = `<p>The protagonist is <code>${this.protagonist}</code></p>
            <p>The person is <code>${this.earthling}</code></p>
            <p>The President of the Universe is <code>${this.president}</code></p>
            <p>The deisgner of the Norwegian fjords is <code>${this.designer}</code></p>
            <p>The ${this.earthling}'s love interest is <code>${this.loveInterest}</code></p>`;
        }
    }
    hitchhikers.statement();
}

document.getElementById("thisExplain").innerText = `let hitchhikers = {
    protagonist: "Ford Prefect",
    earthling: "Arthur Dent",
    president: "Zaphod Beeblebrox",
    designer: "Slarty Bartfast",
    loveInterest: "Trillian",
    statement: function() {
        document.getElementById("characters").innerHTML = "<p>The protagonist is " + <code>this.president</code></p>,
        <p>The person is <code>this.earthling</code></p>
        <p>The President of the Universe is <code>this.president</code></p>
        <p>The deisgner of the Norwegian fjords is <code>this.designer</code></p>
        <p>The <code>this.earthling</code>'s love interest is <code>this.loveInterest</code></p>";
    }
}
hitchhikers.statement();`

function detailsExplain() {
    let hitchhikers = {
        protagonist: "Ford Prefect",
        earthling: "Arthur Dent",
        president: "Zaphod Beeblebrox",
        designer: "Slarty Bartfast",
        loveInterest: "Trillian",
        statement: function() {
            document.getElementById("characters1").innerHTML = `<p>The protagonist is <code>${hitchhikers.protagonist}</code></p>
            <p>The person is <code>${hitchhikers.earthling}</code></p>
            <p>The President of the Universe is <code>${hitchhikers.president}</code></p>
            <p>The deisgner of the Norwegian fjords is <code>${hitchhikers.designer}</code></p>
            <p>The ${hitchhikers.earthling}'s love interest is <code>${hitchhikers.loveInterest}</code></p>`;
        }
    }
    hitchhikers.statement();
}

document.getElementById("detailsExplain").innerText = `let hitchhikers = {
    protagonist: "Ford Prefect",
    earthling: "Arthur Dent",
    president: "Zaphod Beeblebrox",
    designer: "Slarty Bartfast",
    loveInterest: "Trillian",
    statement: function() {
        document.getElementById("characters1").innerHTML = "<p>The protagonist is " + <code>hitchhikers.president</code></p>,
        <p>The person is <code>hitchhikers.earthling</code></p>
        <p>The President of the Universe is <code>hitchhikers.president</code></p>
        <p>The deisgner of the Norwegian fjords is <code>hitchhikers.designer</code></p>
        <p>The <code>hitchhikers.earthling</code>'s love interest is <code>hitchhikers.loveInterest</code></p>";
    }
}
hitchhikers.statement();`

function detailsExplain1() {
    let hitchhikersGuide = {
        protagonist: "Ford Prefect",
        earthling: "Arthur Dent",
        president: "Zaphod Beeblebrox",
        designer: "Slarty Bartfast",
        loveInterest: "Trillian",
        statement: function() {
            document.getElementById("characters2").innerHTML = `Uncaught ReferenceError: hitchhikers is not defined
    at Object.statement`;
        }
    }
    hitchhikersGuide.statement();
}

document.getElementById("detailsExplain1").innerText = `let hitchhikersGuide = {
    protagonist: "Ford Prefect",
    earthling: "Arthur Dent",
    president: "Zaphod Beeblebrox",
    designer: "Slarty Bartfast",
    loveInterest: "Trillian",
    statement: function() {
        document.getElementById("characters2").innerHTML = "<p>The protagonist is " + <code>hitchhikers.president</code></p>,
        <p>The person is <code>hitchhikers.earthling</code></p>
        <p>The President of the Universe is <code>hitchhikers.president</code></p>
        <p>The deisgner of the Norwegian fjords is <code>hitchhikers.designer</code></p>
        <p>The <code>hitchhikers.earthling</code>'s love interest is <code>hitchhikers.loveInterest</code></p>";
    }
}
hitchhikersGuide.statement();`

function thisExplain1() {
    let hitchhikersGuide = {
        protagonist: "Ford Prefect",
        earthling: "Arthur Dent",
        president: "Zaphod Beeblebrox",
        designer: "Slarty Bartfast",
        loveInterest: "Trillian",
        statement: function() {
            document.getElementById("characters3").innerHTML = `<p>The protagonist is <code>${this.protagonist}</code></p>
            <p>The person is <code>${this.earthling}</code></p>
            <p>The President of the Universe is <code>${this.president}</code></p>
            <p>The deisgner of the Norwegian fjords is <code>${this.designer}</code></p>
            <p>The ${this.earthling}'s love interest is <code>${this.loveInterest}</code></p>`;
        }
    }
    hitchhikersGuide.statement();
}

document.getElementById("thisExplain1").innerText = `let hitchhikersGuide = {
    protagonist: "Ford Prefect",
    earthling: "Arthur Dent",
    president: "Zaphod Beeblebrox",
    designer: "Slarty Bartfast",
    loveInterest: "Trillian",
    statement: function() {
        document.getElementById("characters3").innerHTML = "<p>The protagonist is " + <code>this.president</code></p>,
        <p>The person is <code>this.earthling</code></p>
        <p>The President of the Universe is <code>this.president</code></p>
        <p>The deisgner of the Norwegian fjords is <code>this.designer</code></p>
        <p>The <code>this.earthling</code>'s love interest is <code>this.loveInterest</code></p>";
    }
}
hitchhikersGuide.statement();`

document.getElementById("thisOutsideObject").innerText = `document.GetElementById("thisOutsideObjectResult").innerText = this;
console.log(this);`;

function thisOutsideObject() {
    document.getElementById("thisOutsideObjectResult").innerText = this;
    console.log(this);
};

document.getElementById("newHitchhikers").innerText = `let newHitchhikers = hitchhikers.statement;
newHitchhikers();`

function newHitchhikersResult() {
    let hitchhikers = {
        protagonist: "Ford Prefect",
        earthling: "Arthur Dent",
        president: "Zaphod Beeblebrox",
        designer: "Slarty Bartfast",
        loveInterest: "Trillian",
        statement: function() {
            document.getElementById("characters1").innerHTML = `<p>The protagonist is <code>${hitchhikers.protagonist}</code></p>
            <p>The person is <code>${hitchhikers.earthling}</code></p>
            <p>The President of the Universe is <code>${hitchhikers.president}</code></p>
            <p>The deisgner of the Norwegian fjords is <code>${hitchhikers.designer}</code></p>
            <p>The ${hitchhikers.earthling}'s love interest is <code>${hitchhikers.loveInterest}</code></p>`;
        }
    }

    let newHitchhikers = hitchhikers.statement;
    newHitchhikers();
    
    document.getElementById("newHitchhikersResult").innerHTML = `<code>${newHitchhikers()}</code>
<br>
<p>So, why do we get this result?</p>
<p>After all, we seem to be calling this:</p>
<p><code>hitchhikers.statement()</code></p>
<p>just as we did before.</p>
<br>
<p>Because the code is reading the following:</p>
<pre><code><p>let newHitchhikers = function() {</p> <p>log("The protagonist is " + this.president)</p> <p>(etc)</p><p>}</p></code></pre>
</p>But now, this instance of <code>this</code> is no longer attached to anything.</p>

<p>On the next page, we shall find out how to rectify this.</p>`;
}
