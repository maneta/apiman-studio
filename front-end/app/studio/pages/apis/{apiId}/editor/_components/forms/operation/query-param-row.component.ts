/**
 * @license
 * Copyright 2017 JBoss Inc
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {Component, ViewEncapsulation, Input, Output, EventEmitter} from "@angular/core";
import {DropDownOption} from "../../common/drop-down.component";
import {SimplifiedType} from "../../../_models/simplified-type.model";
import {ObjectUtils} from "../../../_util/object.util";
import {Oas20Parameter} from "oai-ts-core";
import {AbstractTypedItemComponent} from "./typed-item.component";


@Component({
    moduleId: module.id,
    selector: "query-param-row",
    templateUrl: "query-param-row.component.html",
    encapsulation: ViewEncapsulation.None
})
export class QueryParamRowRowComponent extends AbstractTypedItemComponent {

    @Input() param: Oas20Parameter;

    protected modelForEditing(): SimplifiedType {
        return SimplifiedType.fromItems(this.param);
    }

    protected modelForViewing(): SimplifiedType {
        return SimplifiedType.fromItems(this.param);
    }

}
