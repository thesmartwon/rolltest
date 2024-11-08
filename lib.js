import { createMergeableStore } from "tinybase/with-schemas";

export default function init() {
	return createMergeableStore();
}
