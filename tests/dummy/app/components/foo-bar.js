import Ember from 'ember';
import InViewportMixin from 'ember-in-viewport';

export default Ember.Component.extend(InViewportMixin, {
  classNames: [ 'fooBar' ],
  classNameBindings: [ 'viewportEntered:active:inactive' ]
});
