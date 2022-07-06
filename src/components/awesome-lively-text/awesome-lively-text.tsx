import { Component, Host, h, ComponentInterface, Prop, State, Event, EventEmitter } from '@stencil/core';
import { obtainTextSegments, TextSegment } from '../../utils/text-segment';

@Component({
  tag: 'awesome-lively-text',
  styleUrl: 'awesome-lively-text.css',
  shadow: true,
})
export class AwesomeLivelyText implements ComponentInterface {
  @State() textSegments: TextSegment[];

  @Prop() text: string;

  @Prop() textSegmentMatchRegExp = /([\w-]+|\s+|[^\w-\s])/g;

  @Event() textSegmentsGenerated: EventEmitter<TextSegment[]>;

  componentWillRender() {
    const textSegments = obtainTextSegments(this.text, this.textSegmentMatchRegExp);
    this.textSegmentsGenerated.emit(textSegments);
    this.textSegments = textSegments;
  }

  render() {
    return (
      <Host>
        {this.textSegments?.map(textSegment => (
          <span>{textSegment.text}</span>
        ))}
      </Host>
    );
  }
}
