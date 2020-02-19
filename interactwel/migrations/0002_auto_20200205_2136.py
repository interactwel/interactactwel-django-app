# -*- coding: utf-8 -*-
# Generated by Django 1.11.21 on 2020-02-05 21:36
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('interactwel', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='IntractwelUser',
            fields=[
                ('id', models.BigAutoField(editable=False, primary_key=True, serialize=False)),
                ('username', models.CharField(max_length=64)),
                ('first_name', models.CharField(max_length=64)),
                ('last_name', models.CharField(max_length=64)),
                ('email', models.CharField(max_length=64)),
                ('phone', models.CharField(max_length=64)),
                ('organization', models.CharField(max_length=64)),
            ],
            options={
                'verbose_name': 'Interactwel User',
                'verbose_name_plural': 'Interactwel Users',
                'db_table': 'interactwel_user',
                'managed': True,
            },
        ),
        migrations.AlterUniqueTogether(
            name='intractweluser',
            unique_together=set([('username',)]),
        ),
    ]