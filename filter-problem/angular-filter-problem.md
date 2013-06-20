# angularjs - filter with "track by" a problem

## Description 

Filters do not work when used in an ngRepeat ``repeat_expression`` with ``track by`` included.

For example, given the following:

	...
	<input ng-model="search" type="text"/>
	...
	<li ng-repeat="_item_ in _collection_ track by _tracking_expression_ | filter:search">
		{{_item_}}
	</li>
	...

### Expected Result
Items will be filtered out of ``_collection_`` as user enters predicate into search.

### Actual Result
Items are not automatically filtered out of ``_collection_`` when user enters data into search.

See <http://jsfiddle.net/nJu9A/> for example.

See <https://groups.google.com/forum/?fromgroups=#!topic/angular/m-1rW9eiiCM> for reference in mailing list.

## Notes

The problem seems to be related to how the ``repeat_expression`` is parsed.

Currently the ``repeat_expression`` is parsed using a single regex pattern when using the ``variable in expression`` style (another pattern is used for the ``(key, value) in expression`` style).

From what I could find, to make things work for the above the following variables in the ngRepeat directive need to be assigned the following values:

	lhs = '_item_';
    rhs = '_collection_ | filter:search'; //essentially ripping out the "track by _tracking_expression_" part
    trackByExp = '_tracking_expression_';

For a proper fix and unit test coverage I believe the following cases need to be accounted for:

* ``variable in expression``
* ``variable in expression | filter:predicate``
* ``variable in expression track by tracking_expression``
* ``variable in expression track by tracking_expression | filter:predicate``
* ``(key, value) in expression``
* ``(key, value) in expression | filter:predicate``
