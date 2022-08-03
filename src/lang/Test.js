import { FormattedList, FormattedMessage, useIntl } from 'react-intl';

function Test() {
    const intl = useIntl();
    return (
        <div style={{ padding: 20 }} data-testid="examples">
            <h3>Declarative examples</h3>
            <FormattedMessage id="message.simple" />
            <br />
            <FormattedMessage id="message.argument" values={{ name: 'John' }} />
            <br />
            <FormattedMessage id="message.plural" values={{ count: 6 }} />
            <br />
            <FormattedMessage id="message.select" values={{ gender: 'female' }} />
            <br />
            <FormattedMessage id="message.text-format" values={{ b: (value) => <b>{value}</b> }} />
            <br />
            <FormattedMessage id="message.number-format" values={{ num: 7500 }} />
            <br />
            <FormattedMessage id="message.currency-format" values={{ amount: 7.5 }} />
            <br />
            <FormattedList type="conjunction" value={['foo', 'bar', 'baz']} />

            <h3>Imperative examples</h3>
            {intl.formatMessage({ id: 'message.simple' })}
            <br />
            {intl.formatMessage({ id: 'message.argument' }, { name: 'John' })}
            <br />
            {intl.formatMessage({ id: 'message.plural' }, { count: 5 })}
            <br />
            {intl.formatMessage({ id: 'message.select' }, { gender: 'female' })}
            <br />
            {intl.formatMessage({ id: 'message.text-format' }, { b: (value) => <b>{value}</b> })}
            <br />
            {intl.formatMessage({ id: 'message.number-format' }, { num: 7500 })}
            <br />
            {intl.formatMessage({ id: 'message.currency-format' }, { amount: 7.5 })}
            <br />
            {intl.formatList(['foo', 'bar', 'baz'], { type: 'conjunction' })}
        </div>
    );
}

export default Test;
