import { followStage, questionStage, shareWithMuseumStage, shareWithSomeoneStage } from "./stage.model";

export class Action {
    constructor (
        public position?: number,
    ){}
}

export class questionAction extends Action {

    constructor (
        public questionStage?: questionStage,
        public position?: number,
        public question?: string,
        public answer?: string,
    ) {
        super(position);
    }
}

export class shareWithMusemAction extends Action {

    constructor (
        public shareWithMuseumStage?: shareWithMuseumStage,
        public position?: number,
        public share?: boolean,
    ) {
        super(position);
    }
}

export class followAction extends Action {

    constructor (
        public followStage?: followStage,
        public position?: number,
        public emailAddress?: string,
        public follow?: boolean,
    ) {
        super(position);
    }
}

export class shareWithFriendAction extends Action {

    constructor (
        public shareWithOtherStage?: shareWithSomeoneStage,
        public position?: number,
        public share?: boolean,
        public emailAddress?: string,
        public message?: string
    ) {
        super(position);
    }
}