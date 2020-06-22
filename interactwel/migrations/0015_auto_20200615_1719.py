# -*- coding: utf-8 -*-
# Generated by Django 1.11.28 on 2020-06-15 17:19
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('interactwel', '0014_auto_20200602_1357'),
    ]

    operations = [
        migrations.CreateModel(
            name='InteractwelProjectData',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('data_type', models.CharField(max_length=256)),
                ('data', models.TextField(blank=True)),
                ('project_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='interactwel.InteractwelProject')),
            ],
            options={
                'verbose_name': 'Interactwel Project Data',
                'verbose_name_plural': 'Interactwel Project Data',
                'db_table': 'interactwel_project_data',
                'managed': True,
            },
        ),
        migrations.AlterUniqueTogether(
            name='interactwelprojectdata',
            unique_together=set([('name', 'project_id')]),
        ),
    ]
