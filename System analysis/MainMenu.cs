﻿using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace System_analysis
{
    public partial class MainMenu : Form
    {
        public MainMenu()
        {
            InitializeComponent();
        }

        private void SelectRoadmap_Click(object sender, EventArgs e)
        {
            SelectRoadmap SelectRoadmapForm = new SelectRoadmap();
            this.Hide();
            SelectRoadmapForm.Show();
        }
    }
}
