import { Model } from "@vuex-orm/core";

/**
 * Class create Todo Model for vuex-orm.
 * @extends Model
 */
export default class Todo extends Model {

  static entity = "todos";
    /**
     * Get Todo Model's fields.
     * @return {Object} The Todo Model's fields.
     */
  static fields () {
    return {
      id: this.attr(null),
      title: this.string(""),
      isDone: this.boolean(false),
    };
  }
}