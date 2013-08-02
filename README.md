node-call
=========

Node module to simply call a function asynchronously, under the MIT license.


Imagine an old phone system...

You have to send a call, an operator receives your instructions, he sends a channel for you to give the following instructions.

Of course, the operator call asked takes a while before to be accepted or rejected.

During this time, what the operator must to do, based on the response, resolved or rejected, and even what to do after, regardless of the response.

On the other side, the operator is presented to the recipient, allowing it to respond by a resolution or rejection and to define actions to perform after this response.


If you understand this, you understand the principle of this module.


This module is browser compatible.


<dl>
    <dt>
        <strong>[Sync] var channel = call(closure);</strong>
    </dt>
    <dd>
        <dl>
            <dt>
                Object <strong>channel</strong> :
            </dt>
            <dd>
                <dl>
                    <dt>
                        Methods :
                    </dt>
                    <dd>
                        <dl>
                            <dt>
                                Function <strong>done</strong> :
                            </dt>
                            <dd>
                            </dd>
                            <dt>
                                Function <strong>fail</strong> :
                            </dt>
                            <dd>
                            </dd>
                            <dt>
                                Function <strong>lastly</strong> :
                            </dt>
                            <dd>
                            </dd>
                            <dt>
                                Function <strong>then</strong> :
                            </dt>
                            <dd>
                            </dd>
                        </dl>
                    </dd>
                </dl>
            </dd>
            <dt>
                Function <strong>closure</strong> :
            </dt>
            <dd>
                <dl>
                    <dt>
                        Methods :
                    </dt>
                    <dd>
                        <dl>
                            <dt>
                                Function <strong>resolve</strong> :
                            </dt>
                            <dd>
                            </dd>
                            <dt>
                                Function <strong>reject</strong> :
                            </dt>
                            <dd>
                            </dd>
                        </dl>
                    </dd>
                </dl>
            </dd>
        </dl>
    </dd>
    <dt>
    </dt>
    <dd>
    </dd>
    <dt>
    </dt>
    <dd>
    </dd>
    <dt>
    </dt>
    <dd>
    </dd>
</dl>
