//GETTING OBJECT VALUES

console.log(`
GETTING OBJECT VALUES

Get the object values from calling its property:

let OBJECT = {
    PROPERTY: VALUE
}
`)

let thisObject = {
    firstProperty: "firstValue",
    secondPropery: "secondValue"
};
console.log(thisObject.firstProperty);

console.log(`We called the object's property value from its propery using dot notation (.)

If we have sub-properties within the object, we can "dive deeper in:

let OBJECT = {
    let PROPERTY = {
        SUB-PROPERY: VALUE,
        SECOND SUB-PROPERTY: VALUE
    }
}
`);

let thatObject = {
    newFirstProperty: {
        firstSubProperty: "firstSubValue",
        secondSubProperty: "secondSubValue"
    }
};
console.log(thatObject.newFirstProperty.firstSubProperty);

//UPDATING OBJECT VALUES
console.log(`
UPDATING OBJECT VALUES
We can update object values by assigning them new values thus:

thisObject.firstProperty = "newValue"`);
console.log(thisObject.firstProperty);
thisObject.firstProperty = "newValue";
console.log(thisObject.firstProperty);

console.log(thatObject.newFirstProperty.firstSubProperty);
thatObject.newFirstProperty.firstSubProperty = "newFirstSubValue";
console.log(thatObject.newFirstProperty.firstSubProperty);

//DELETING OBJECT VALUES
console.log(`
DELETING OBJECT VALUES
Use the DELETE keyword along with objectName.property.
Deletes both the key (the property) and its value.

delete thisObject.firstProperty`);

console.log(thisObject.firstProperty);
delete thisObject.firstProperty;
console.log(thisObject.firstProperty);
    