import os

from flask import (
    render_template,
    request,
    Blueprint,
    redirect,
    url_for,
    session,
)

import pandas as pd



scorecard = Blueprint("scorecard", __name__, static_folder = 'static', static_url_path='/scorecard', template_folder='templates')

@scorecard.route('/record', methods = ['GET', 'POST'])
def record():
    
    return render_template('/scorecard/record.html')