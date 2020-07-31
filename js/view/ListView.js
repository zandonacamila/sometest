class ListView {

    constructor (list, item, input) {
        
        this._list = list;
        this._item = item;
        this._input = input;
    }

    template(model) {

        return `
        <ul>
            <li class="list-group-item justify-content-center"><input class="checkbox" type="checkbox">${input}</li>
        </ul>`
    }
}